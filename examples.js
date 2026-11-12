import { DIMENSIONS, QUESTIONS } from './quiz.js?v=0.4.0';

/** Synthetic scale demonstration: search exact integer score steps, including reverse-scored items. */
export function createExampleAnswers(vector) {
  if(!Array.isArray(vector)||vector.length!==DIMENSIONS.length||vector.some(value=>!Number.isFinite(value)||value<0||value>100))throw new TypeError('示例画像需要四个0—100的数值。');
  const answers={s29:'6',s30:'2',s31:'2',s32:'5',s33:'5',s34:'5'};
  DIMENSIONS.forEach((dimension,index)=>{
    const questions=QUESTIONS.filter(question=>question.kind==='personality'&&question.dimension===dimension.id);
    let reachable=new Map([[0,[]]]);
    for(const question of questions){
      const next=new Map();
      for(const [sum,path] of reachable)for(const option of question.options){
        const value=sum+option.scoreStep;
        if(!next.has(value))next.set(value,[...path,option.id]);
      }
      reachable=next;
    }
    const target=vector[index]*questions.length*6/100;
    const nearest=[...reachable.keys()].sort((a,b)=>Math.abs(a-target)-Math.abs(b-target)||a-b)[0];
    reachable.get(nearest).forEach((choice,i)=>{answers[questions[i].id]=choice;});
  });
  return answers;
}
