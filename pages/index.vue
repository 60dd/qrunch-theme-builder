<template lang="pug">
  #top-page
    Header
    HeaderBottom
    .content-box
      .content-box__inner
        .content-box__main-content
          .main_content
            .main_content__inner
              .entry-list
                .entry-list__entries
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
                .entry-list__no-content データなし
              .content-list-pager
                .content-list-pager__inner
                  span.content-list-pager__previous
                    a.content-list-pager__previous-link(href="#") 前のページへ
                  span.content-list-pager__previous
                    a.content-list-pager__next-link(href="#") 次のページへ
                  span.content-list-pager__previous
                    a.content-list-pager__previous-link.content-list-pager__previous-link--disabled(href="#") 前のページへ
                  span.content-list-pager__previous
                    a.content-list-pager__next-link.content-list-pager__previous-link--disabled(href="#") 次のページへ
        SubContents
    Footer
</template>
