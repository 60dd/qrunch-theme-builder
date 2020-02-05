<template lang="pug">
  // サブコンテント（サイドバー）
  .content-box__sub-content
    aside.sub-content
      .sub-content__inner
        // 検索モジュール
        .sub-content__side-modules
          .side-module.side-search-module
            h3.side-module__title 検索
            .side-module__content
              form.side-module__form(method="get" action="/search")
                input.side-module__input(type="search" placeholder="ブログ内を検索..." name="q" value="")
        // プロフィールモジュール
        .sub-content__side-modules
          .side-module.side-profile-module
            h3.side-module__title プロフィール
            .side-module__content
              a.side-module__profile-icon-link(href="#" target="_blank")
                img.side-module__profile-icon(src="https://s3.qrunch.io/7082aaaf8ca2be37cf1e123e8d85f0c1.png")
              .side-module__profile-name
                a.side-module__profile-name-link(href="#" target="_blank") User Name
              .side-module__profile-id @User Screen Name
              .side-module__profile-description Profile Description
        // カテゴリーモジュール
        .sub-content__side-modules
          .side-module.side-category-module
            h3.side-module__title カテゴリー
            .side-module__content
              ul.side-module__categories
                li.side-module__category-item
                  a.side-module__category-item-link(href="#")
                    span.side-module__category-item-month Category Name
                    span.side-module__category-item-count （00）
                li.side-module__category-item
                  a.side-module__category-item-link(href="#")
                    span.side-module__category-item-month Category Name
                    span.side-module__category-item-count （00）
                li.side-module__category-item
                  a.side-module__category-item-link(href="#")
                    span.side-module__category-item-month Category Name
                    span.side-module__category-item-count （00）
              // 表示するデータがない場合
              .side-module__no-content
                span データなし
        // タグモジュール
        .sub-content__side-modules
          .side-module.side-tag-module
            h3.side-module__title よく使うタグ
            .side-module__content
              ul.side-module__tags
                li.side-module__tag-item
                  a.side-module__tag-item-link(href="#") Tag Name
              // 表示するデータがない場合
              .side-module__no-content
                span データなし
        // 月別アーカイブモジュール
        .sub-content__side-modules
          .side-module.side-monthly-archive-module
            h3.side-module__title 月別アーカイブ
            .side-module__content
              ul.side-module__monthly-archives
                li.side-module__monthly-archive-item
                  a.side-module__monthly-archive-item-link(href="#")
                    span.side-module__monthly-archive-item-month Archive Year-Archive Month
                    span.side-module__monthly-archive-item-count (Archive Count)
              // 表示するデータがない場合
              .side-module__no-content
                span データなし
</template>
