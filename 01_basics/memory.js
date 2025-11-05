/*In the javaScript language we have heap and stack memory 
Stack : which memory have not taken reference data type its take Copy real value  and update copy not a real value
all primitive types are store in stack memory

heap : Which memory take reference of real value and update real value it call heap memory store 
 In stack memory store real valu copy and heap momory  real value store
 */
let channel = "Anime"
let anotherChannel=channel;
console.log(channel)
console.log(anotherChannel)
anotherChannel="Cartoon"
console.log(channel);//channel = Anime but I was change channel value by another channel
console.log(anotherChannel);
console.log("heap memory")
let youtube={
    email:"surash600@gamail",
    subscriber:200
}
console.log("youtube="+ youtube.subscriber);

let instragram=youtube;
console.log("insta"+ instragram.subscriber);
instragram.subscriber=400
console.log("youtube=" + youtube.subscriber)
console.log("instragram= "+ instragram.subscriber);