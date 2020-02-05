<template lang="pug">
  #top-page
    Header
    HeaderBottom
    // コンテント
    .content-box
      .content-box__inner
        .content-box__main-content
          // メインコンテント
          .main_content
            .main_content__inner
              // トップページ・記事リスト
              .entry-list
                .entry-list__entries
                  // 記事
                  .entry-item.entry-item--large
                    .entry-item__inner
                      time.entry-item__date
                        a.entry-item__date-link(href="#") 2018-10-24
                      h2.entry-item__title
                        a.entry-item__title-link(href="#") Entry Title
                      .entry-item__categories
                        span.entry-item__category-item
                          a.entry-item__category-item-link(href="#") Category-1
                        span.entry-item__category-item
                          a.entry-item__category-item-link(href="#") Category-2
                        span.entry-item__category-item
                          a.entry-item__category-item-link(href="#") Category-3
                      .entry-item__description Entry Desciption
                // 表示するデータがない場合
                .entry-list__no-content データなし
              // ページャ
              .content-list-pager
                .content-list-pager__inner
                  // ページ分割がある場合
                  span.content-list-pager__previous
                    a.content-list-pager__previous-link(href="#") 前のページへ
                  span.content-list-pager__previous
                    a.content-list-pager__next-link(href="#") 次のページへ
                  // ページ分割がない場合
                  span.content-list-pager__previous
                    a.content-list-pager__previous-link.content-list-pager__previous-link--disabled 前のページへ
                  span.content-list-pager__previous
                    a.content-list-pager__next-link.content-list-pager__next-link--disabled 次のページへ
        SubContents
    FooterTop
    Footer
</template>
