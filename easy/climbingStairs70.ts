
function climbStairs(n: number): number {
  if (n <= 2) return n; 

  let oneStepBefore = 2; 
  let twoStepsBefore = 1; 
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = current;
  }

  return current;
}

console.log(climbStairs(5)); 
