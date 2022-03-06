  // 时间戳转换
  export default (time,detail=true)=>{
    let date=new Date(time);
    let year=date.getFullYear();
    let mounth=date.getMonth()+1;
    let day=date.getDate();
    let hours=date.getHours();
    let minuts=date.getMinutes();
    function numTo2(num){
        if(num<10) num='0'+num;
        return num
    }
    if(detail) return `${year}-${numTo2(mounth)}-${numTo2(day)} ${numTo2(hours)}:${numTo2(minuts)}`
    return `${year}-${numTo2(mounth)}-${numTo2(day)}`
}