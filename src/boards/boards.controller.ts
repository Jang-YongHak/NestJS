import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService:BoardsService){

    }

    @Get('/')
    getAllBoards(): Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post('/')
    // @Body() body도 가능함. body 객체를 통째로 가져오기 
    @UsePipes(ValidationPipe)
    createBorad(
        //@Body('title') title:string,
        //@Body('description') description:string
        @Body() createBoardDto: CreateBoardDto
    ): Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    // @Param() params: string[]
    // @Param('id') id: string
    getBoadById(@Param('id') id: string): Board{
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id: string): void{
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ){
        this.boardsService.updateBoardStatus(id, status);       
    }
}
