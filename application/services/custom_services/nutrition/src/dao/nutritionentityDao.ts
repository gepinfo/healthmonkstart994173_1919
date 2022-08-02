import * as mongoose from 'mongoose';
import nutritionentityModel from '../models/nutritionentity';
import { CustomLogger } from '../config/Logger'


export class nutritionentityDao {
    private nutritionentity = nutritionentityModel;
    constructor() { }
    
    public async GpDelete(nutritionentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpDelete');

    

    
    
    
    this.nutritionentity.findByIdAndRemove(nutritionentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(nutritionentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(nutritionentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.nutritionentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(nutritionentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.nutritionentity.findOneAndUpdate({ _id: nutritionentityData._id }, nutritionentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(nutritionentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpUpdate');

    

    
    
    
    this.nutritionentity.findOneAndUpdate({ _id: nutritionentityData._id }, nutritionentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(nutritionentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpGetNounById');

    

    
    
    
    this.nutritionentity.findById(nutritionentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpGetAllValues');

    

    
    
    
    this.nutritionentity.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(nutritionentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritionentityDao.ts: GpCreate');

    let temp = new nutritionentityModel(nutritionentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritionentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}