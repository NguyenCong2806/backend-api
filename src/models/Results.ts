/* eslint-disable prettier/prettier */
export default class Results<Y> {
  pageIndex: number;
  totalPage: number;
  totalCount: number;
  items: Array<Y>;
}
