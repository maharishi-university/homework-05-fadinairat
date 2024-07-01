export class Meditation{
    #duration:number =0;
    #intervalId: number | undefined = undefined;

    constructor(duration: number){
       this.#duration = duration;
    }

    start(){
        console.log("Start Meditation");
        this.#intervalId = setInterval(()=>{
            console.log(this.#duration)
            this.#duration--;
            if(this.#duration === 0) {
                clearInterval(this.#intervalId);
                console.log("Jay Guru Dev");
            }
        },1000);
    }
}