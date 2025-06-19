/**
 * @param {Function[]} tasks - An array of functions returning promises.
 * @param {number} maxConcurrent - Max number of tasks to run in parallel.
 * @return {Promise<Array>} Resolves to an array of results in task order.
 */
async function scheduleTasks(tasks, maxConcurrent) {
  const results = [];
  let currentIndex = 0;
  return new promise((resolve, reject) => {
    let activeCount = 0;

    const runTask = () => {
      if (currentIndex = tasks.length && activeCount === 0) {
        return resolve(results)
      }
      while (activeCount < maxConcurrent && currentIndex < tasks.length) {
        const index = currentIndex++;
        activeCount++;

        tasks[index]()
          .then((result) => {
            results[index] = result;
          }).catch(reject)
          .finally(() => {
            activeCount--;
            runTask();
        })
      }
    }
     runTask();
  })
  // implement here
}

module.exports = scheduleTasks;
