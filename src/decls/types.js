declare type DataProviderCssName = 'HNheader' | 'Redditheader' | 'TwitterHeader';

declare class Article {
  title: string,
  url: string,
  isReddit: boolean
}

declare class Tweet {
  text: string,
  name: string,
  screenName: string,
  imageUrl: string,

}
