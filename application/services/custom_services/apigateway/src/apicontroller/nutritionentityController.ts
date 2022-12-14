import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class nutritionentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/nutritionentity/:id', this.GpDelete);
this.router.get('/nutritionentity/get/search', this.GpSearch);
this.router.put('/nutritionentity/get/update', this.GpSearchForUpdate);
this.router.put('/nutritionentity', this.GpUpdate);
this.router.get('/nutritionentity/:id', this.GpGetNounById);
this.router.get('/nutritionentity', this.GpGetAllValues);
this.router.post('/nutritionentity', this.GpCreate);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpDelete');
        new ApiAdapter().delete(Constant.NUTRITIONURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.NUTRITIONURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.NUTRITIONURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpUpdate');
        new ApiAdapter().put(Constant.NUTRITIONURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.NUTRITIONURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.NUTRITIONURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into nutritionentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.NUTRITIONURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from nutritionentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

