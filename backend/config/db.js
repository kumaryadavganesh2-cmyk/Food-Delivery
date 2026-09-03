import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://ganesh:ganesh@ac-b6q87op-shard-00-00.wkippyj.mongodb.net:27017,ac-b6q87op-shard-00-01.wkippyj.mongodb.net:27017,ac-b6q87op-shard-00-02.wkippyj.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-32mfdh-shard-0&authSource=admin&appName=Cluster0').then(()=>console.log("DB Connected"));
}