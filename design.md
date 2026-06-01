# Redesign - Kancelaria Restrukturyzacje i Upadłości

Pełny redesign wizualny. Treść = źródło prawdy (z repo, nic nie wymyślam). Stack bez zmian: Next.js 13 Pages Router, Tailwind + daisyUI, static export.

## 1. Produkt

Kancelaria prawna w Gdańsku. Wiodąca specjalizacja: **restrukturyzacje i upadłości**. Pozycjonowanie: *"Twoi doradcy w kryzysie"*. Radcy prawni + licencjonowani doradcy restrukturyzacyjni.

Native shape strony = katalog usług zakotwiczony w jednej dominującej specjalizacji (01) + 5 pobocznych, zespół 3 osób, twarde dowody (100+ firm, 90% uchylonych zajęć, 10 mln umorzonych długów, 150+ restrukturyzacji), bezpośredni zwrot "Przedsiębiorco,".

Odbiorca: przedsiębiorca w kryzysie finansowym. Stan emocjonalny: stres, wstyd, presja czasu. Strona ma dawać **spokój, powagę, dyskrecję, kompetencję** - nie krzyczeć.

## 2. Kierunek estetyczny: Dark editorial dossier

Ciemny, typograficzny, redakcyjny. Specjalizacje prezentowane jak ponumerowane akta sprawy (dossier 01-06). Złoto zachowane jako brand equity (logo wagi sprawiedliwości), ale użyte oszczędnie - jako akcent i hairline, nie wypełnienie.

Dlaczego nie obecny układ: dziś to generyczny "stockowy hero + karty + liczniki". Brak hierarchii, złoto rozlane, 4 kroje pisma bez systemu. Redesign daje powagę doradztwa restrukturyzacyjnego klasy premium.

**Jedna rzecz do zapamiętania:** sekwencja specjalizacji jako numerowane akta (01 → 06) ze złotym hairline, otwierana wielką serif typografią.

## 3. System wizualny

### Kolor (CSS variables, dodać do `tailwind.config.js` + globals)
```
--ink:        #0B0E11   (near-black slate, tło dominujące)
--ink-soft:   #14181D   (sekcje, karty)
--ink-line:   #232A31   (hairline / bordery)
--paper:      #F4F1EA   (jasne sekcje - kontrast, "papier akt")
--text:       #E7E4DD   (tekst na ciemnym)
--text-dim:   #9AA3AB   (podpisy, meta)
--gold:       #D4AF37   (zachowane - akcent, hairline, numery)
--gold-soft:  #C8A8431A (tła/poświata złota, ~10%)
```
Dominanta: ciemny. Akcent: złoto, ostro i rzadko. Jasne sekcje (--paper) jako celowy oddech/kontrast (np. blok "Przedsiębiorco,", bio zespołu).

### Typografia
Zostają fonty już wpięte przez `next/font` - redukuję chaos 4 krojów do systemu 2:
- **Display / nagłówki:** Domine (serif, już używany w hero) - duże, ciasny leading, czasem uppercase z trackingiem.
- **Tekst / UI:** Open Sans (`font-sans`) - body, meta, nawigacja.
- Lora i Raleway: wycofać z użycia (zostawić definicje, nie stosować) - eliminacja niespójności.

Skala (fluid, rozszerzyć istniejące `.fluid-title`):
```
display-xl  clamp(2.75rem, 1.5rem + 6vw, 6rem)     leading-[0.95]   hero
display-lg  clamp(2rem, 1.2rem + 4vw, 4rem)        leading-[1.0]    sekcje
h2          clamp(1.5rem, 1rem + 2vw, 2.5rem)
h3          1.5rem
body        1.0625rem  leading-relaxed
meta        0.8125rem  uppercase tracking-[0.2em]   numery, etykiety
```

### Przestrzeń i layout
- Siatka 12-kol, asymetria: nagłówki sekcji w wąskiej kolumnie po lewej, treść po prawej (editorial).
- Hojny negative space na ciemnym tle. Sekcje oddzielane złotym hairline + numerem.
- Container bez zmian (istniejące max-width), ale więcej `py` między sekcjami (96-160px desktop).
- Bordery: 1px `--ink-line`; akcent 1px `--gold` tylko na aktywnych/hover.

### Motion
Zostaje framer-motion. Zasada: **jeden dobrze zorkiestrowany reveal na sekcję** (staggered fade+rise przy wejściu w viewport), zamiast rozsypanych animacji. Hero: staggered reveal nagłówek → tagline → metryki. Liczniki (CountUp) zostają, ale duration skrócić (obecne 10s to za długo) do ~2s.

## 4. Strony

### `/` (index)
1. **Hero** - ciemny, full-height. Lewa kolumna: `RESTRUKTURYZACJE I UPADŁOŚCI` (display-xl), złoty hairline, tagline "Twoi doradcy w kryzysie", podtytuł "radcy prawni · licencjonowani doradcy restrukturyzacyjni". Prawa/dół: indeks 6 specjalizacji jako lista numerowana (01-06), linkująca do `/specjalizacje#id`. Obraz `home.webp` jako stłumione, zgradient­owane tło (nie dominuje).
2. **Metryki** (SuccessCounter) - pas 4 liczb na ciemnym, duże serif cyfry, złoty underline. duration ~2s.
3. **"Nasze usługi"** (Description) - editorial 2-kol, tekst + `services.webp`.
4. **Blok "Przedsiębiorco,"** (Paper) - sekcja na jasnym `--paper` (kontrast), duża serif kursywa, domknięcie "Resztą zajmiemy się my." jako mocny akcent.
5. **Zespół - skrót** - zamiast Swiper (desktop-only, znika na mobile): statyczny 3-kol grid mini-bio z linkiem do `/zespol`. Działa na wszystkich szerokościach.

### `/specjalizacje`
- Hero-band ciemny, tytuł "Specjalizacje" + lead "Postępowania restrukturyzacyjne i upadłościowe - to nasza główna specjalizacja".
- 6 sekcji jako **akta dossier**: każda otwierana wierszem `01 — RESTRUKTURYZACJE` (numer złoty, meta tracking), nagłówek serif, treść w kolumnie editorial. Złoty hairline między aktami (zastępuje obecny Divider). Treść 1:1 z obecnej.
- Anchory id bez zmian (`restrukturyzacje`, `upadlosc`, `pomoc-prawna`, `prawo-gospodarcze`, `odszkodowania`, `kredyty-frankowe`) - linki z hero/nav działają dalej.

### `/zespol`
- Hero-band ciemny "Zespół Kancelarii".
- 3 bio (AgentCart) na jasnym `--paper`: duże zdjęcie, spec (złoty meta-tracking), nazwisko serif, opis, kontakt. Naprzemienny układ zostaje, ale spójny editorial rytm. Treść/maile/telefony 1:1.

### `/privacy-policy`
- Spójny ciemny layout, typografia czytelnego dokumentu prawnego (wąska kolumna ~65ch). Treść bez zmian.

## 5. Chrome (Header / Footer)

- **TopBar:** ciemny pas z kontaktami (telefony + mail) - zostaje, dopasowany kolor `--ink`/`--text-dim`, hover złoto.
- **NavBar:** sticky, złoty hairline u dołu (jest). Logo + "Zespół Kancelarii" / "Specjalizacje". Stan scrolled: zamiast `slate-200/90` → ciemny `--ink/90` z blur (spójność z dark theme). Mobile: Drawer na ciemnym.
- **Footer:** ciemny, kontakty + adres (mapa Google link zostaje) + polityka prywatności. Dodać logo + nazwę dla domknięcia.

## 6. Zakres techniczny

- Nowe tokeny: `tailwind.config.js` (colors) + warstwa `@layer` w `globals.css` (fluid scale, hairline util).
- Refaktor komponentów: Hero, ServicesSection (Description/Paper/SuccessCounter), AgentCart, AgentContact, 6× Specjalizacje (ujednolicić w jeden wzorzec `<Specialization number title id>` z treścią jako children - redukcja duplikacji), Header (TopBar/NavBar/Drawer), Footer, Container spacing.
- Zamiana AgentSwiper → statyczny TeamPreview (działa na mobile, mniej JS). swiper jako zależność można usunąć.
- Lora/Raleway: zostają zdefiniowane, nieużywane (lub usunąć z `Styles.tsx` w osobnym kroku).
- Bez zmian: routing, anchory, schema.org/Meta, treść PL (zachować diakrytykę), `images.unoptimized`, ESLint (no-any, no-unused).
- Assety: używam istniejących `public/images/*.webp`. Nie zakładam nowych.

## 7. Otwarte pytania

1. Dark dominujący OK, czy wolisz wariant jasny (paper) jako bazowy?
2. AgentSwiper → statyczny grid (rekomendacja, działa na mobile) czy zostawić karuzelę?
3. Lora/Raleway - usunąć całkiem czy zostawić zdefiniowane?
4. Skrócić CountUp z 10s do ~2s - OK?
