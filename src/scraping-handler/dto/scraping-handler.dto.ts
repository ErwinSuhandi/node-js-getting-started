import { ScrapingHandlerMutasiDto } from "./scraping-handler.mutasi.dto";

export class ScrapingHandlerDto {
    tgl: Date;
    ket: string;
    cab: string;
    saldo: number;
    mutasi : ScrapingHandlerMutasiDto;
  }