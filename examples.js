import { DIMENSIONS, QUESTIONS } from './quiz.js?v=0.2.0';

/** Synthetic demonstration only: use attainable averages rather than four rounded constants. */
export function createExampleAnswers(vector) {
  if(!Array.isArray(vector)||vector.length!==DIMENSIONS.length||vector.some(value=>!Number.isFinite(value)||value<0||value>100))throw new TypeError('示例画像需要四个0—100的数值。');
  const answers=Object.fromEntries(QUESTIONS.filter(question=>question.kind==='context').map(question=>[question.id,'a']));
  DIMENSIONS.forEach((dimension,index)=>{
    const questions=QUESTIONS.filter(question=>question.kind==='personality'&&question.dimension===dimension.id);
    let reachable=new Map([[0,[]]]);
    for(const question of questions){
      const next=new Map();
      for(const [sum,path] of reachable)for(const option of question.options){
        const value=sum+option.value;
        if(!next.has(value))next.set(value,[...path,option.id]);
      }
      reachable=next;
    }
    const target=vector[index]*questions.length;
    const nearest=[...reachable.keys()].sort((a,b)=>Math.abs(a-target)-Math.abs(b-target)||a-b)[0];
    reachable.get(nearest).forEach((choice,i)=>{answers[questions[i].id]=choice;});
  });
  return answers;
}
