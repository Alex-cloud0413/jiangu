/** A replaceable, cancellable confirmation delay. A stale task never advances a later question. */
export function createAutoAdvance({onAdvance,isCurrent=()=>true,delay=340,setTimer=setTimeout,clearTimer=clearTimeout}) {
  if(typeof onAdvance!=='function')throw new TypeError('onAdvance is required');
  let generation=0;
  let timer=null;
  let pending=false;
  function cancel() {
    generation++;
    if(timer!==null)clearTimer(timer);
    timer=null;
    pending=false;
  }
  return {
    cancel,
    isPending:()=>pending,
    request(snapshot) {
      cancel();
      const token=generation;
      pending=true;
      timer=setTimer(()=>{
        if(token!==generation || !pending)return;
        timer=null;
        pending=false;
        if(isCurrent(snapshot))onAdvance(snapshot);
      },delay);
    }
  };
}
