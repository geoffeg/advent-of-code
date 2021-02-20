(ns advent-2020-day7)
(require '[clojure.string :as str])

(defn parse-bag [line]
  (let [[[_ _ outer-bag] & bags] (re-seq #"(?:^|(\d+) )(\w+ \w+) bag" line)]
    [outer-bag (mapv rest bags)]))

(defn parse-file [file]
  (into (hash-map) (map parse-bag (str/split-lines (slurp file)))))

(defn find-bag-container [bags targets]
  (distinct (flatten (map (fn [target] (filter
                               (fn [bag]
                                 (->>
                                   (bags bag)
                                   (map last)
                                   (some #(= target %))))
                               (keys bags))) targets))))

(defn find-bags [bags target-bag]
  (loop [bags bags
         target-bag target-bag
         found-bags []]
    (let [found (find-bag-container bags target-bag)]
      (if (empty? found)
        found-bags
        (recur bags found (concat found-bags found))))))

(let [bags (into {} (map parse-bags (parse-file "2020/day7/sample.dat")))]
  (find-bags bags "shiny gold"))

(defn part1 [filename]
  (count (distinct (find-bags (parse-file filename) ["shiny gold"]))))