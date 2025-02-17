console.log('hello world');

function add(a: number, b: number) 
{

    console.log(a + b);
}

function theotherfunction()
{
    console.log('this is the other function---20250209');
}

function todayNewFunction()
{
    console.log('this is the new function---20250209');
}
//add(1, 2);


function generateParenthesis(n: number): string[] {
    const result: string[] = [];
  
    function backtrack(
      current: string,
      left: number,
      right: number
    ) {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
  
      if (left < n) {
        backtrack(current + "(", left + 1, right);
      }
  
      if (right < left) {
        backtrack(current + ")", left, right + 1);
      }
    }
  
    backtrack("", 0, 0);
    return result;
  }

  //generateParenthesis(3); 

  function generateParenthesis2(n: number): string[] {
    const result: string[] = [];
    const stack: { str: string; left: number; right: number }[] = [{ str: "", left: 0, right: 0 }];
  
    while (stack.length > 0) {
      const { str, left, right } = stack.pop()!;
  
      if (str.length === 2 * n) {
        result.push(str);
        console.log('str.length === 2 ',result);
      } else {
        if (left < n) {
          stack.push({ str: str + "(", left: left + 1, right });
          console.log('left < n',stack);
        }
        if (right < left) {
          stack.push({ str: str + ")", left, right: right + 1 });

          console.log('right < left',stack);
        }
      }
    }
  
    return result;
  }

  function generateParenthesis3(n: number): string[] {
    const result: string[] = [];
    const stack: { chars: string[]; left: number; right: number }[] = [{ chars: [], left: 0, right: 0 }];
  
    while (stack.length > 0) {
      const { chars, left, right } = stack.pop()!;
  
      if (chars.length === 2 * n) {
        result.push(chars.join(""));
      } else {
        if (left < n) {
          stack.push({ chars: [...chars, "("], left: left + 1, right });
        }
        if (right < left) {
          stack.push({ chars: [...chars, ")"], left, right: right + 1 });
        }
      }
    }
  
    return result;
  }

  console.log('final_',generateParenthesis3(2));