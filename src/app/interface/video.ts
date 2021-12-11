export interface Video {
  videoID: number,
  thumb: string,
  duration: number,
  uploadTime: string,
  title: string,
  approvalState?:string
}
export interface VideoX {
  title:string,
  description:string,
  videoID: number,
  thumb: string,
  duration: number,
  uploadTime: string,
  owner: string,
  playbackUrlList: { src: string, type: string, label: string }[]
}
