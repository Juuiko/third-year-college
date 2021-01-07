{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_prfchk (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,9,2,0] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/bin"
libdir     = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/lib/x86_64-linux-ghc-8.6.4/prfchk-0.9.2.0-KV9VXCJ2aMmB0dkHlBTwZT"
dynlibdir  = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/lib/x86_64-linux-ghc-8.6.4"
datadir    = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/share/x86_64-linux-ghc-8.6.4/prfchk-0.9.2.0"
libexecdir = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/libexec/x86_64-linux-ghc-8.6.4/prfchk-0.9.2.0"
sysconfdir = "/home/alex/Documents/third-year-college/functional-programming/Exercise03/.stack-work/install/x86_64-linux-tinfo6/lts-13.19/8.6.4/etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "prfchk_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "prfchk_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "prfchk_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "prfchk_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "prfchk_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "prfchk_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
