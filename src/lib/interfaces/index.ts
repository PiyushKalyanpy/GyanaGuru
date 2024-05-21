export interface ISection {
  title: string;
  sectionIndex: number;
  lectures: ILecture[];
}

export interface ILecture {
  title: string;
  lectureIndex: number;
  url: string;
  contentLength: string;
}
