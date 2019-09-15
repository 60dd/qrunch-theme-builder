<template>
  <div id="top-page">
      <Header/>
      <HeaderBottom/>
      <!-- ### コンテントボックス ### -->
      <div class="content-box">
          <div class="content-box__inner">
              <!-- ### メインコンテント ### -->
              <div class="content-box__main-content">
                  <main class="main_content">
                      <div class="main_content__inner">
                          <!-- ### トップページ・記事リスト ### -->
                          <div class="entry-list">
                              <div class="entry-list__entries">
                                  <!-- ### 記事 ### -->
                                  <div class="entry-item entry-item--large">
                                      <div class="entry-item__inner">
                                          <time datetime="2018-10-24 02:59:15 +0900" title="2018-10-24 02:59:15 +0900" class="entry-item__date">
                                              <a href="#" class="entry-item__date-link">2018-10-24</a>
                                          </time>
                                          <h2 class="entry-item__title">
                                              <a href="#" title="#" class="entry-item__title-link">Entry Title</a>
                                          </h2>
                                          <div class="entry-item__categories">
                                              <span class="entry-item__category-item">
                                                  <a href="#" class="entry-item__category-item-link">Category-1</a>
                                              </span>
                                              <span class="entry-item__category-item">
                                                  <a href="#" class="entry-item__category-item-link">Category-2</a>
                                              </span>
                                              <span class="entry-item__category-item">
                                                  <a href="#" class="entry-item__category-item-link">Category-3</a>
                                              </span>
                                          </div>
                                          <div class="entry-item__description">Entry Desciption</div>
                                      </div>
                                  </div>
                              </div>
                              <!-- ### 表示するデータがない場合 ### -->
                              <div class="entry-list__no-content">データなし</div>
                          </div>
                          <!-- ページャ -->
                          <div class="content-list-pager">
                              <div class="content-list-pager__inner">
                                  <!-- ページ分割がある場合 -->
                                  <span class="content-list-pager__previous">
                                      <a href="#" class="content-list-pager__previous-link">前のページへ</a>
                                  </span>
                                  <span class="content-list-pager__next">
                                      <a href="#" class="content-list-pager__next-link">前のページへ</a>
                                  </span>
                                  <!-- ページ分割がない場合 -->
                                  <span class="content-list-pager__previous">
                                      <a class="content-list-pager__previous-link content-list-pager__previous-link--disabled">前のページへ</a>
                                  </span>
                                  <span class="content-list-pager__next">
                                      <a class="content-list-pager__next-link content-list-pager__next-link--disabled">前のページへ</a>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </main>
              </div>
              <SubContents/>
          </div>
      </div>
      <Footer/>
  </div>
</template>
