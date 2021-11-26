// import store from '@/store';

export const authorize = (to: any, from: any, next: any) => {
  const queryKey = 'redirect_path';
  if (to.query[queryKey]) { // パスが存在している場合(RewriteRule ^/"任意のコンテキストパス"/((?!.*(\..+)$).*)$ https://domain.com/"任意のコンテキストパス"/?redirect_path=$1 の条件に該当する時)
    next({
      path: `/${to.query[queryKey]}`, // 取得したパスにvue-routerで遷移する
    });
  } else { // パスが存在しない場合(RewriteRule ^/"任意のコンテキストパス"/$ - [L] の条件に該当する時)
    // 任意の処理を記述
  }
};
