import { Collegue } from "./collegue";
import { LikeHate } from "./like-hate";

export interface Vote {
  colleague : Collegue,
  vote : LikeHate
}
