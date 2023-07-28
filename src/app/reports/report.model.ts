export class Report {
  constructor(public hoursId: bigint,
  public locNum: string,
  public locState: string,
  public procDate: Date,
  public workDate: Date,
  public hours: number,
  public k401: number,
  public flexAmount: number,
  public flexHours: number,
  public empAccountNum: string,
  public rasMbrId: bigint,
  public downloadDate: Date,
  public rasEmpId: bigint,
  public rasMhrsId: bigint,
  ) {}
}
