import { Request, Response } from 'express';
import {nutritionentityDao} from '../dao/nutritionentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let nutritionentity = new nutritionentityDao();

export class nutritionentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpDelete')
     let  nutritionentityId = req.params.id;
     nutritionentity.GpDelete(nutritionentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpSearch')
     let  nutritionentityData = req.query;
     nutritionentity.GpSearch(nutritionentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpSearchForUpdate')
     let  nutritionentityData = req.body;
     nutritionentity.GpSearchForUpdate(nutritionentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpUpdate')
     let  nutritionentityData = req.body;
     nutritionentity.GpUpdate(nutritionentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpGetNounById')
     let  nutritionentityId = req.params.id;
     nutritionentity.GpGetNounById(nutritionentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpGetAllValues')
     
     nutritionentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritionentityService.ts: GpCreate')
     let  nutritionentityData = req.body;
     nutritionentity.GpCreate(nutritionentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritionentityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}