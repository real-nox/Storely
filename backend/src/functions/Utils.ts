import type { NextFunction, Response, Request } from "express";

type AsyncHandlerController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

export const tryCatch =
  (f: AsyncHandlerController) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await f(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export const AsyncFunctions =
  <T>(f: (args?: T) => Promise<any>) =>
  async (args?: T) => {
    try {
      return await f(args);
    } catch (error) {
      console.error(error);
    }
  };
