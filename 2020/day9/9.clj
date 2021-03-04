(ns advent-2020-day9)
(require '[clojure.string :as str])

(defn parse-file [file]
  (mapv clojure.edn/read-string (str/split-lines (slurp file))))

(defn filter-combination [items target]
  (filter #(= (+ (first %) (last %)) target)
          (for [x items y items] (vector x y))))

(defn part1 [filename size]
  (let [data (parse-file filename)]
    (->> data
         (map #(vector %2 %1) (range))
         (drop size)
         (filter (fn [[entry position]]
                   (empty?
                     (filter-combination
                       (subvec data (- position size ) position) entry))))
         ffirst
         )))