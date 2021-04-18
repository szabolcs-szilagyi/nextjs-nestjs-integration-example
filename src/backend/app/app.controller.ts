import { Controller, Get, Param, Query } from "@nestjs/common";
import { NumberNameDto } from "./dto/number-name.dto";

@Controller("randomNumber")
export class AppController {
  @Get()
  randomNumber() {
    return Math.random() * 100;
  }

  @Get('pipe-test')
  pipeTest(
    @Query() numberNameDto: NumberNameDto,
  ) {
    return { numberNameDto };
  }

  @Get("/:number")
  async findOne(@Param("number") param: string) {
    return { param }; // You don't even need a return, I put it just to have some return.
  }
}
