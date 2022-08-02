import { Request, Response } from 'express';
import { nutritionentityService } from '../service/nutritionentityService';
import { CustomLogger } from '../config/Logger'
let nutritionentity = new nutritionentityService();

export class nutritionentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
nutritionentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
nutritionentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
nutritionentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
nutritionentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
nutritionentity.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
nutritionentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
nutritionentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpCreate');
    })}


}