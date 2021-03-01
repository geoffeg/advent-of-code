(ns advent-2020-day8)
(require '[clojure.string :as str])

(defn parse-line [line]
  (let [[operation offset] (str/split line #" ")]
    [operation (Integer/parseInt offset)]))

(defn parse-file [file]
  (mapv parse-line
       (str/split-lines
         (slurp file))))

(defn run-instructions [instructions]
  (loop [acc 0, line 0, seen []]
    (let [[instruction offset] (instructions line)]
      (prn instruction offset line)
      (if (some #(= line %) seen)
        acc
        (cond
          (= instruction "acc") (recur (+ acc offset) (inc line) (conj seen line))
          (= instruction "jmp") (recur acc (+ line offset) (conj seen line))
          (= instruction "nop") (recur acc (inc line) (conj seen line)))))))

(defn part1 [filename]
  (->> filename
       parse-file
       run-instructions))