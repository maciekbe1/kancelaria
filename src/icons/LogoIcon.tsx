type LogoIconProps = {
  size: number;
};

export const LogoIcon: React.FC<LogoIconProps> = ({ size }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      version="1.0"
      viewBox="0 0 1280 1232"
      xmlns="http://www.w3.org/2000/svg"
      fill="#d4af37"
      className="transition-all ease-in-out delay-150"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g transform="translate(0 1232) scale(.1 -.1)">
        <path d="m3765 12306c-16-7-63-38-104-69-42-31-120-76-180-102-219-97-326-195-426-394-55-111-85-195-135-383-65-244-75-269-123-314-23-23-78-69-122-104-125-99-235-200-426-387-97-95-179-173-183-173-9 0 3 64 24 127 25 72 89 166 218 321 124 147 184 231 214 298 10 25 32 112 48 194 44 229 64 265 223 392 114 91 117 94 117 126 0 54-75 15-206-108-60-57-154-137-208-178-273-207-368-324-440-545-48-148-69-283-86-569-6-92-14-177-19-191-5-13-36-57-68-98-127-159-252-331-358-488-61-90-118-169-127-175-61-38-18 106 107 364 57 118 113 249 125 290 14 52 23 132 30 265 13 233 24 314 51 368 24 47 109 154 164 207 83 79 88 162 8 117-25-14-78-74-148-167-27-36-102-121-167-190-217-230-283-336-297-482-10-96-6-347 9-510 13-147 13-346-1-428-7-48-38-124-113-285-119-251-182-403-231-549-28-83-38-102-56-104-22-4-22-2-16 85 4 57 22 146 52 255 25 92 50 202 56 245 14 99 6 248-21 383-12 58-24 155-27 215-6 132 7 179 92 322 65 109 115 211 115 236 0 12-8 17-25 17-47 0-75-41-260-373-285-513-292-560-159-1115 19-81 50-199 69-262s39-149 45-190c13-82 15-67-54-370-20-85-45-213-56-285-11-71-25-147-31-167-24-92-54-32-45 92 4 47 9 164 12 261 8 216-4 272-100 477-97 208-110 251-110 357 0 80 4 104 43 215 24 70 45 153 48 189 6 60 5 63-13 53-57-30-87-101-173-406-85-296-106-414-98-545 10-176 59-296 318-791l92-176-11-146c-16-195-15-390 3-638 8-113 15-211 15-217 0-20-25-15-47 10-29 31-49 105-77 299-14 91-32 195-41 230-24 93-92 228-180 358-93 138-140 229-162 313-16 63-16 84 3 385l7 102h-31c-27 0-32-5-47-47-10-31-21-123-30-253-8-113-19-257-26-320-21-214 0-398 58-514 61-122 215-333 390-536 122-142 180-215 199-252 8-16 26-95 40-176 13-81 51-257 85-390 33-134 58-246 55-250-8-8-46 29-63 61-8 16-34 89-58 162-50 154-117 289-177 360-23 28-97 99-165 158-134 118-203 204-235 294-11 32-32 119-46 193-26 132-28 135-55 138s-27 2-27-51c0-30 11-110 25-178s39-203 55-299c56-326 84-391 229-542 94-98 225-209 462-390 99-76 130-105 142-135 8-21 32-83 52-138 42-112 137-327 214-484 51-105 60-131 41-131-31 0-101 96-179 246-143 277-211 347-409 424-233 91-277 128-362 305-31 66-66 128-77 138-20 17-21 17-26-4-8-31 8-108 39-181 48-114 212-431 264-511 91-137 153-190 351-294 96-50 235-119 309-153 74-33 145-67 156-75 12-8 63-83 114-167 137-226 307-465 469-658 39-47 71-89 71-94 0-14-53 4-102 35-58 37-101 84-203 219-162 216-244 274-485 345-230 67-340 147-449 325-83 134-109 164-128 148-11-9-14-26-11-64 4-44 20-77 112-230 190-319 328-488 455-564 98-58 265-127 561-230 365-127 410-149 488-237 75-84 315-307 466-432 107-89 143-127 133-138-3-2-30 2-60 11-76 22-184 96-312 215-220 204-301 241-529 241-159 0-251 12-305 39-20 11-68 48-106 83-77 70-124 108-135 108-16 0-30-51-20-70 27-50 125-153 292-305 328-299 428-346 803-374 247-19 465-41 510-51 30-7 97-44 193-109 158-105 359-227 513-309 53-29 104-61 113-71 17-19 17-20-16-26-46-9-138 9-202 38-28 13-114 66-191 118-186 125-196 128-475 127-319-2-443 26-607 138-52 36-101 63-109 60s-14-19-14-37c0-39 33-72 171-175 130-97 226-161 349-232 234-134 342-157 624-132 156 13 561 35 624 33 41-1 85-16 200-66 176-78 439-174 577-212 55-16 103-31 108-35 4-3 1-15-7-26-12-16-29-20-104-22-108-5-167 10-292 73-110 55-201 85-260 85-25 0-102-16-171-36-114-33-138-36-291-41-218-7-289 4-435 68-128 56-143 59-143 25 0-50 124-121 390-221 406-154 584-189 791-159 221 32 494 107 652 177l58 26 77-19c185-46 511-102 785-135 76-10 75-32-3-59-70-24-149-23-274 3-165 35-226 37-296 12-33-12-92-40-131-63-142-80-212-100-431-122-131-14-157-14-245 0-54 8-119 18-145 21l-47 6 8-29c13-49 57-63 331-109 52-9 163-27 245-41 262-43 458-43 592 2 128 43 430 207 587 319 44 32 54 35 117 35 38 0 69-4 69-8 0-12-47-53-110-94-113-76-231-178-435-378-115-114-235-225-264-249-109-85-247-137-398-150-83-7-86-8-58-20 57-24 250-70 365-87 63-9 177-17 254-18l138-1 28 100c106 374 292 676 501 814 91 59 156 78 211 62 72-21 144-69 231-151 181-171 324-434 402-735l23-90 139 1c76 0 179 6 228 13 89 13 289 58 375 85l45 14-60 6c-171 19-262 46-359 108-28 18-150 130-271 248-226 221-374 349-505 437-41 28-84 60-94 72l-19 21h75 76l124-83c138-93 404-232 524-273 72-25 93-28 224-28 145 0 240 9 445 44 61 11 171 28 245 40 97 14 152 29 198 50 58 27 62 31 52 51-9 17-18 20-43 16-131-22-304-30-415-19-171 17-230 35-401 120l-154 77-86-1c-49 0-131-10-191-23-145-31-215-29-317 10-20 8-23 12-13 24 15 18 83 31 235 45 145 14 340 48 535 94l145 34 85-35c191-80 398-135 628-168 220-32 412 11 872 195 164 65 235 103 287 153 25 23 30 34 22 44-18 20-35 16-154-37-146-64-172-69-356-70-172 0-223 7-382 52-154 43-193 39-372-39-173-76-242-96-325-96-67 0-141 26-123 44 4 4 92 36 193 70 201 66 481 174 572 220 73 37 113 37 607 7 349-21 368-21 447-5 161 33 281 95 564 291 201 139 236 168 268 225l23 41-24 11c-21 10-36 2-140-65-109-72-121-78-219-98-82-17-155-22-363-27l-260-6-66-31c-37-18-115-66-174-108-155-110-200-129-315-134l-95-4 19 21c11 11 71 49 135 82 165 88 344 196 505 307 77 52 155 99 175 103 20 5 149 18 286 29 513 41 585 57 746 162 123 80 256 193 414 352 147 148 188 204 169 233-6 9-15 18-21 20s-55-35-109-83c-55-47-115-94-134-104-55-28-141-40-294-40-239 0-306-30-540-243-67-59-150-128-186-151-65-43-178-92-188-81-12 12 41 65 184 185 82 69 235 208 339 310l190 185 300 109c414 150 515 190 608 238 147 77 253 203 484 578 102 166 109 181 118 244 7 46 7 46-22 46s-54-31-167-212c-67-108-203-193-406-253-258-77-320-124-524-397-31-42-79-97-106-121-55-50-133-93-138-77-5 14 11 38 117 170 151 188 318 434 474 695 27 46 34 50 265 162 390 189 412 201 503 294 80 81 158 203 243 380 109 228 156 350 156 403 0 25-4 46-9 46-18 0-58-64-87-135-36-92-61-130-121-187-56-52-134-94-256-139-186-68-268-155-406-425-33-67-75-140-91-162-30-42-90-83-90-61 0 6 41 99 91 207 94 204 165 370 193 457 29 90 55 119 226 249 180 138 434 358 479 415 16 20 38 55 50 78 24 49 96 321 106 403 4 30 22 134 40 230 49 254 52 276 28 288-10 6-25 7-31 3-7-4-23-59-37-122-47-216-55-244-88-297-31-52-114-136-271-275-124-111-181-207-266-452-29-82-58-161-65-175-15-28-65-78-65-64 0 5 27 119 60 254s71 314 85 399 35 170 45 190 58 79 105 131c101 111 299 361 378 475 72 105 134 230 152 308 17 71 20 353 5 457-5 36-14 136-19 222-8 123-34 304-44 315-1 1-14 4-30 8l-27 7v-93c0-52 5-142 11-200 10-91 10-116-5-181-21-95-78-208-184-365-131-193-166-291-213-598-20-135-37-214-52-244-20-41-50-72-60-61-2 3 2 93 10 200 13 173 13 398 1 814 0 17 26 81 64 155 35 69 109 214 164 321 167 327 193 437 160 685-28 210-115 525-191 693-31 65-36 72-63 72h-29l8-47c5-25 28-103 51-172 31-96 42-147 46-212 5-106-3-134-105-357-41-90-84-201-95-245-22-85-22-120-2-514l6-123h-25c-24 0-26 4-32 58-17 146-49 323-92 497-59 239-59 271-4 465 114 400 161 630 161 781 0 132-47 276-148 459-179 323-218 391-260 454-54 80-69 91-105 82l-26-6 20-47c11-25 45-88 75-140 122-208 142-274 125-418-6-51-20-137-31-191-45-217-38-326 36-597 41-149 75-339 63-351-3-3-14-3-24 0-15 4-32 39-69 137-64 174-119 302-226 529-49 103-96 210-104 239-21 68-21 270-1 484 8 88 15 225 15 305 0 290-43 383-295 649-70 74-154 171-188 215-93 122-136 166-164 166-58 0-35-50 87-185 132-146 147-192 160-480 12-285 28-343 182-645 80-157 108-235 108-301 0-59-28-30-130 131-86 137-185 275-336 467-62 77-115 154-118 170-3 15-11 111-16 213-18 325-56 497-145 667-82 156-152 230-375 403-74 58-178 146-231 196-69 67-108 96-138 105-93 28-62-40 60-132 100-76 163-148 189-216 11-31 30-109 41-175s29-144 40-175c28-73 118-205 225-328 121-140 172-210 205-281 29-63 49-164 33-164-5 0-70 61-144 136-167 168-399 380-505 461-125 95-120 87-185 320-70 248-98 329-156 448-93 191-194 287-395 376-64 28-140 69-170 90s-73 52-96 69-56 33-73 36c-52 11-38-27 41-112 58-64 82-101 140-218 101-207 178-302 394-485 61-51 127-112 148-134 43-48 87-126 87-157 0-26-3-25-185 95-77 50-200 127-274 171-130 76-137 83-231 194-263 311-466 432-835 495-248 42-661 35-848-16-40-10-107-63-95-74 3-3 68-11 145-16 166-11 211-21 283-61 77-43 126-82 274-216 257-234 346-279 587-302 100-10 220-4 416 20 96 12 85 17 303-113 234-139 480-311 480-337 0-4-32-14-70-21-126-22-153-13-495 164-182 94-299 113-495 81-179-29-365-44-546-44h-181l4-24c6-31 9-32 147-51 63-9 128-20 146-25 17-5 106-49 198-99 234-125 278-142 387-148 50-3 263 5 474 16 211 12 437 21 502 21h118l103-82c110-89 506-471 569-551 50-62 51-87 6-87-47 0-134 27-192 60-28 16-102 72-165 125-139 116-207 162-282 192-79 32-130 40-385 58-263 18-359 30-433 51-88 25-190 43-190 32 0-29 62-67 168-102 122-41 117-38 350-227 193-156 207-162 502-204 135-19 334-46 442-60 219-29 334-53 373-79 26-17 169-204 287-376 84-122 168-261 218-361 39-77 40-79 18-79-74 1-166 78-323 270-190 233-246 265-660 371-187 49-253 70-355 118-140 66-170 77-170 62 0-36 25-61 105-106 122-68 154-94 225-177 247-289 274-319 325-343 27-14 185-72 350-130 326-115 358-127 516-192l106-44 66-137c75-156 144-321 192-461 49-141 106-333 101-339-14-13-66 15-106 57-44 46-69 88-205 329-116 207-167 252-445 388-234 115-351 183-466 270-68 51-89 62-100 53-8-6-14-17-14-23s53-63 117-126c118-115 118-116 213-293 150-282 124-257 555-527 279-174 485-311 508-338 33-39 155-777 132-800-9-9-53 27-73 60-11 18-46 107-77 198-114 328-164 392-473 600-200 136-268 193-302 254-17 29-39 61-50 71-19 17-20 17-20-1 0-10 16-57 36-104 19-47 50-141 69-210 94-350 134-409 474-700 79-68 208-184 286-257 136-127 143-135 149-179 15-116 1-574-25-791-10-78-14-93-29-93-10 0-25 12-35 26-38 58-47 108-55 289-13 304-47 370-361 690l-207 211-28 87c-15 47-31 84-36 81-14-9-9-90 12-176 11-46 20-113 20-149 0-76 23-220 46-294 22-69 38-92 210-321 83-110 210-289 282-398 149-224 144-209 116-377-30-177-172-699-198-727-18-19-43-5-55 30-17 48-13 222 9 384 26 192 25 218-6 306-32 90-72 163-187 343-135 210-167 279-167 359 0 58-2 66-18 66-17 0-20-12-26-120-4-67-13-171-21-232-18-132-19-287-4-343 6-22 41-101 79-175 112-222 322-746 323-805 1-77-365-827-411-843-18-6-34 77-27 140 4 32 29 116 56 186 57 145 89 266 89 334 0 98-32 207-180 618-52 144-52 145-46 233 4 48 3 87-1 87-22-1-34-22-43-76-23-130-44-211-75-294-38-98-72-255-81-374-6-77-4-88 34-201 61-177 164-596 181-735l8-65-78-115c-213-315-513-680-560-680-4 0-6 15-3 32 13 81 52 177 116 290 38 68 88 161 111 208l42 85-1 135c0 106-7 173-33 315-38 212-45 389-17 464 9 24 14 46 11 49-15 15-55-48-79-122-15-45-54-127-87-181-91-153-174-383-200-555-16-113 5-519 41-770l9-65-117-114c-210-205-498-443-594-492l-38-19v42c0 81 77 202 250 393 99 109 136 161 156 217 31 88 54 269 59 458 5 199 15 253 60 322 18 27 24 46 19 61-6 20-7 20-34-10-16-17-46-62-68-100-22-37-81-115-131-171-99-113-219-303-271-429-42-101-64-210-95-473-29-253-45-367-51-385-14-35-342-241-564-355-122-62-220-104-227-97-2 3-1 17 3 33 11 43 85 110 240 216 78 53 155 110 171 126 67 67 123 217 229 606 43 160 73 253 89 276 14 19 37 52 51 73 15 20 25 39 23 42-13 12-76-36-119-90-27-34-87-90-132-123-109-79-252-227-318-327-79-122-124-224-211-482-79-238-138-375-181-425-56-65-795-318-929-318h-40l15 29c32 60 108 112 321 216 223 109 318 171 364 239 35 50 84 149 141 281 71 162 117 231 211 313 56 48 85 81 87 97 2 14 0 25-5 25-13-1-119-61-215-122-48-31-151-89-229-129-200-102-280-181-475-467-176-258-251-357-337-448-116-122-110-121-541-174-272-34-304-36-312-16-19 49 80 106 306 176 269 83 353 145 484 355 114 184 169 249 250 300 40 25 83 56 96 70 22 23 22 25 4 25-28 0-107-23-219-64-55-20-160-53-234-72s-159-47-190-62c-73-35-242-202-382-377-169-211-260-314-307-345-45-30-47-30-183-30h-138l-58 48c-77 65-133 127-271 307-138 179-243 290-335 356-70 49-149 80-307 119-47 12-151 44-231 71s-154 49-163 49c-32 0-11-24 65-75 105-70 158-130 262-295 156-246 218-291 531-391 209-66 276-105 276-161 0-14-8-18-43-18-100 0-630 76-691 100-69 26-210 189-379 440-168 250-212 306-321 416-97 96-108 104-256 179-85 43-186 99-225 125-170 114-265 135-162 36 23-22 63-57 87-77 55-44 111-140 190-324 122-283 144-306 450-460 302-152 384-214 353-268-7-13-31-8-159 28-242 68-552 175-715 248-91 40-125 102-249 452-108 304-149 401-203 483-63 94-172 210-292 310-49 41-126 112-170 157-71 72-125 109-125 85 0-5 17-30 39-57 59-75 67-96 131-337 93-348 161-529 228-599 15-16 88-70 162-120 170-116 238-179 250-229 4-21 4-38-1-38-18 0-361 180-484 254-228 138-285 177-301 207-15 30-22 79-49 329-40 363-58 445-138 605-76 153-146 260-242 366-42 46-95 114-116 150-50 83-108 151-109 127 0-9 16-54 36-99 36-82 36-84 45-273 12-270 17-330 34-397 30-113 44-135 210-329 153-178 210-269 222-355l6-46-29 11c-86 33-313 218-618 506l-109 102 22 221c60 603 27 835-169 1166-34 57-69 130-79 162-21 69-44 114-66 133-26 21-28 4-10-65 22-81 17-172-24-445-57-372-54-403 52-600 128-240 168-325 179-387 6-35 8-66 4-70-26-25-422 466-605 749l-43 67 42 188c63 286 97 415 147 568 45 137 45 142 40 240-6 103-27 200-92 404-19 63-42 152-50 198s-22 98-31 116c-15 29-18 30-24 12-4-11-5-54-3-95 6-86-8-136-129-465-38-104-77-224-85-265-24-122-5-229 74-428 24-63 48-139 53-169 12-70 2-173-16-173-27 0-271 471-363 700-52 130-54 136-42 179 32 122 217 573 307 753 83 166 94 204 94 332 0 102-21 412-36 525-8 61-25 39-35-45-10-78-53-164-178-357-99-153-151-249-187-342-29-78-29-107 1-320 18-130 22-328 6-368-12-31-37-45-52-30-13 13-97 291-138 453-33 134-81 385-81 427 0 33 207 346 401 604 85 112 168 228 185 257 45 74 71 184 85 347 6 77 19 173 30 213 20 76 25 142 10 142-14 0-27-22-40-70-24-84-50-118-248-321-109-112-213-223-231-246-72-92-112-241-112-417 0-121-14-199-46-268-70-147-92-35-101 503l-6 355 40 40c59 59 241 226 403 369 345 304 385 364 470 705 17 65 46 151 65 192 37 76 48 141 20 118-7-6-27-35-44-64-39-71-101-124-294-255-335-226-369-270-487-606-63-179-90-236-127-265-24-18-29-19-31-6-8 40 92 663 125 777 5 15 22 38 38 51 46 39 274 188 555 363 140 88 272 175 293 193 57 52 97 113 186 279 109 206 121 222 228 314 56 48 95 90 99 105 14 54-12 46-132-42-91-66-175-114-359-206-372-184-419-225-559-485-87-161-144-249-187-290-39-36-89-54-89-31 0 30 61 231 111 365 65 176 216 522 238 547 32 36 54 45 685 271 148 53 281 104 295 113 67 42 113 89 242 244 145 174 159 187 304 272 80 47 90 57 93 85 2 17 1 31-3 31-3 0-31-13-63-29-121-61-301-124-505-176-252-65-367-115-454-197-30-29-107-114-169-188-62-75-130-150-151-167-51-41-116-73-148-73h-25l36 73c86 170 365 582 495 730l34 38 315 45c552 77 724 105 767 124 59 26 121 69 243 170 140 116 212 166 274 188 28 10 86 31 129 46 73 26 77 30 77 58 0 23-4 28-17 24-136-41-290-66-538-85-441-35-465-44-755-281-150-123-282-181-345-152l-26 12 22 32c66 91 410 425 632 611l67 57h153c83 0 256-7 382-15 127-8 314-18 417-21 175-7 190-6 255 15 38 12 127 54 199 92 224 121 271 141 369 155 152 23 194 34 205 54 6 10 10 21 10 24 0 4-91 5-202 5-176-2-228 2-393 27-125 18-229 28-305 28-105 0-122-3-200-32-47-18-130-57-185-88-198-109-240-126-327-135-74-7-172 2-187 17-23 24 418 318 655 437l52 26 123-14c198-24 366-30 445-15 160 29 292 102 453 249 162 148 217 194 281 236 111 71 148 82 319 94 84 6 156 13 159 16s-4 18-15 33c-23 31-88 49-269 75-463 67-860-9-1189-228-106-71-207-165-298-278-95-118-102-124-222-192-55-32-174-106-265-165s-176-112-188-119c-23-12-24-12-17 21 19 84 59 133 241 287 208 175 286 273 390 486 51 106 77 145 138 214 42 46 76 90 76 97 0 17-26 17-65 0z" />
        <path d="m6296 10763c-18-5-19-14-12-205 3-110 3-249 0-309-7-108-7-109-27-92-10 10-67 83-125 163-118 162-190 253-203 258-10 4-12-1366-2-1472l6-69 132-176c205-275 212-286 219-361 3-36 2-102-2-148l-7-83-95 71c-183 138-355 197-655 225-33 3-166 10-295 15-387 17-551 37-777 95-234 61-425 151-529 248-77 72-99 106-138 216l-31 86-65 33c-60 31-71 33-142 30-66-3-82-7-119-33-88-62-116-183-69-294 26-59 53-84 152-142 38-22 67-46 65-52-27-70-528-1185-825-1837-304-669-461-1008-593-1277-60-123-109-227-109-233 0-15 206-194 302-262 282-200 600-325 961-379 181-26 472-26 652 0 459 68 869 263 1178 560l87 84-35 31c-28 25-65 97-191 376-86 190-388 856-671 1480-578 1271-633 1395-633 1411 0 7 9 9 23 5 21-5 233-47 797-157 548-106 918-217 1207-362 226-114 417-279 505-437l48-85 2-840c3-924-3-3838-8-3844-1-1-73 34-159 79-134 70-156 79-150 60 23-71 425-935 436-938 9-2 25 22 44 65 16 37 85 190 153 338 148 321 243 538 237 543-2 2-71-30-153-72l-150-75-7 152c-4 84-5 1138-3 2342l4 2190 23 45c175 334 563 560 1261 734 118 30 334 77 480 105 239 47 740 146 798 158l23 5-20-49c-11-28-172-387-359-799s-446-983-575-1269c-503-1111-534-1175-573-1175-26 0-14-17 64-92 577-551 1454-738 2237-475 292 97 589 275 798 476l81 79-32 58c-140 254-770 1621-1436 3119-85 193-87 172 17 227 31 17 73 48 92 69 62 69 75 188 32 282-21 46-32 58-78 80-90 45-202 35-280-26-35-27-45-44-64-105-34-107-81-172-177-243-151-112-335-184-609-239-184-38-344-55-704-75-281-15-397-26-490-46-168-36-323-110-456-221l-47-38-6 31c-11 59-7 238 8 272 7 18 88 132 180 255 110 149 166 233 167 250 5 109 3 1502-3 1502-11 0-92-100-173-215-88-124-162-215-176-215-5 0-9 121-9 293 0 166-4 298-10 307-7 11-32 15-102 17-51 1-102-1-112-4zm154-260c0-76-4-143-8-149s-22-13-40-16c-29-4-35-1-43 19-10 28-12 266-2 276 3 4 26 7 50 7h43v-137zm340-288c0-44-6-89-14-108-27-60-219-302-243-305-19-3-23 1-23 26 0 90 18 132 117 266 112 153 145 194 156 195 4 1 7-33 7-74zm-723 28c18-21 75-94 125-163l92-125 4-82c7-130-6-122-177 107l-101 135v83c0 95 7 100 57 45zm719-458c-8-32-233-329-256-337-19-7-20-3-20 61 0 66 2 70 50 137 138 191 190 260 207 272s18 9 21-50c2-34 1-72-2-83zm-745 123c22-18 148-181 199-257 38-56 44-73 48-133 8-109-12-95-168 117l-110 150v68c0 68 5 77 31 55zm46-385c72-88 190-258 196-285 4-14 4-47 1-72l-7-45-28 14c-15 8-39 30-52 47-13 18-60 83-105 144l-82 111v77c0 72 1 76 19 67 10-6 36-32 58-58zm703-11v-78l-113-148c-61-82-122-155-135-164l-22-14v72 73l78 106c43 58 89 122 102 141 29 44 71 90 82 90 4 0 8-35 8-78zm-1-350c-4-68-8-83-32-113-15-19-58-77-97-130-38-53-84-109-102-124l-33-28-8 49c-4 26-6 58-3 70s54 87 112 165c114 155 142 189 157 189 5 0 8-34 6-78zm-733 50c18-15 174-225 218-294 15-22 16-39 11-93l-7-67-34 33c-19 18-79 95-134 170l-100 138v65c0 71 8 80 46 48zm-2055-1331c461-1e3 1099-2414 1099-2437 0-2-660-3-1467-2l-1468 3 3 28c3 26 1387 3085 1445 3192 13 25 38-26 388-784zm5786-521c701-1541 863-1902 856-1912-2-5-663-8-1469-8-1307 0-1464 2-1464 15 0 25 16 61 727 1625 372 817 686 1509 699 1538 17 39 28 53 41 50 11-2 194-394 610-1308z" />
      </g>
    </svg>
  );
};
