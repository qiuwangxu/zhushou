// import { history } from 'umi'

// export function render(oldRender) {
//   fetch('/api/auth').then(auth => {
//     if (auth.isLogin) { oldRender() }
//     else {
//       history.push('/login')
//       oldRender()
//     }
//   });
// }


// 埋点统计
// export function onRouteChange({ location, routes, action }) {
//   bacon(location.pathname);
// }

export function onRouteChange({ matchedRoutes }:{matchedRoutes:any}) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '运作助手';
  }
}
