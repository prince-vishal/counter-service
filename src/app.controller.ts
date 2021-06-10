import {Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {SuccessResponse} from "./responses/successResponse";

@Controller('/counters')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCounters(@Req() request:Request){

  }

  @Put('/:id')
  updateCounter(@Req() request: Request, @Param('id') counterId){
    let counter = this.appService.updateCounter(counterId, request)

    return new SuccessResponse(counter)
  }

  @Delete('/:id')
  deleteCounter(@Req() request: Request, @Param('id') counterId){
    let success = this.appService.deleteCounter(counterId);

    return new SuccessResponse({deleted: success})
  }

  @Put('/reset')
  resetCounter(){
    let counters = this.appService.resetCounters();

    return new SuccessResponse(counters)
  }

  @Post('/recycle')
  recycleCounters(){
    let counters = this.appService.resetCounters();

    return new SuccessResponse(counters)
  }
}
