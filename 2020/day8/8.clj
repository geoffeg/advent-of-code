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
  (loop [acc 0 line 0 seen #{}]
    (cond (contains? seen line) [acc line]
          (= line (count instructions)) [acc line]
          :else (let [[instruction offset] (instructions line)]
                  (case instruction
                    "acc" (recur (+ acc offset) (inc line) (conj seen line))
                    "jmp" (recur acc (+ line offset) (conj seen line))
                    "nop" (recur acc (inc line) (conj seen line)))))))

(defn part1 [filename]
  (->> filename
       parse-file
       run-instructions
       first))

(defn part2 [filename]
  (let [instructions (parse-file filename)]
    (->> instructions
         count
         range
         (map #(update-in instructions [% 0] {"jmp" "nop", "nop" "jmp", "acc" "acc"}))
         (map run-instructions)
         (filter #(= (count instructions) (last %)))
         ffirst)))
