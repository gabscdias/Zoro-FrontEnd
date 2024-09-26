import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const token = localStorage.getItem('accessToken'); // Seu token ou lógica para obter o token
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloned); // Envia a requisição clonada
  }

  // Se não houver token, apenas envia a requisição original
  return next(req);
};
