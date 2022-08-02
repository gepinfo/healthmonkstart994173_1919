import { Request, Response, NextFunction } from "express";
import { nutritionentityController } from '../controller/nutritionentityController';


export class Routes {
    private nutritionentity: nutritionentityController = new nutritionentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/nutritionentity/:id').delete(this.nutritionentity.GpDelete);
app.route('/nutritionentity/get/search').get(this.nutritionentity.GpSearch);
app.route('/nutritionentity/get/update').put(this.nutritionentity.GpSearchForUpdate);
app.route('/nutritionentity').put(this.nutritionentity.GpUpdate);
app.route('/nutritionentity/:id').get(this.nutritionentity.GpGetNounById);
app.route('/nutritionentity').get(this.nutritionentity.GpGetAllValues);
app.route('/nutritionentity').post(this.nutritionentity.GpCreate);
     }

}