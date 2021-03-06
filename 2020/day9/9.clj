(ns advent-2020-day9)
(require '[clojure.string :as str])

(defn parse-file [file]
  (mapv #(Float/parseFloat %) (str/split-lines (slurp file))))

(defn filter-combination [items target]
  (filter #(= (+ (first %) (last %)) target)
          (for [x items y items] (vector x y))))

(defn find-invalid-number [size numbers]
  (->> numbers
       (map #(vector %2 %1) (range))
       (drop size)
       (filter (fn [[entry position]]
                 (empty?
                   (filter-combination
                     (subvec numbers (- position size) position) entry))))
       ffirst))

(defn gen-ranges [width list]
  (mapv vector
        (range 0 (inc (- (count list) width)))
        (range width (inc (count list)))))

(defn find-total [data target]
  (filter
    #(= target (apply + (subvec data (first %) (last %))))
    (apply concat (mapv
                    #(gen-ranges % data)
                    (range 2 (count data))))))

(defn part1 [filename size]
  (let [data (parse-file filename)]
    (find-invalid-number size data)))

; Find which consecutive numbers equal the invalid number, looking at a minimum of 2 numbers
; To create the list of consecutive numbers to consider, start with a 2 number-wide range of
; windows starting at the top of the list and going down, then go to 3, 4, 5 wide, etc
; stopping at the actual width of the list
; TODO: Rewrite using some of approach that allows lazily generating the list instead of
; TODO: generating it at the beginning
; 0 1 2 3 4 5
; ^   ^        start: 0 end: 2 (width: 2)
;   ^  ^       start: 1 end: 3 (width: 2)
;     ^  ^     start: 2 end: 4 (width: 2)
;       ^   ^  start: 3 end: 5 (width: 2)
; ^     ^      start: 0 end: 3 (width: 3)
;   ^     ^    start: 1 end: 4 (width: 3)
; [0 2] [1 3] [2 4] [3 5] [0 3] [1 4] [2 5] [0 4] [1 5], etc

(defn part2 [filename size]
  (let [data (parse-file filename)
        invalid-numbers (find-invalid-number size data)
        found-range (first (find-total data invalid-numbers))
        range-data (sort (subvec data (first found-range) (last found-range)))]
    (+ (first range-data) (last range-data))))
