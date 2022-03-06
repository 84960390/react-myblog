export default function getRuntime(time){
    let start=new Date(time);
    let now=Date.now();
    return Math.floor((now-start)/60/60/1000/24);
}