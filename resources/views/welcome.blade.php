<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Rex&Regina Law</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

         <!-- Favicons -->
        <link href="images/logo.svg" rel="icon">

        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/flaticon.css') }}">
    </head>
    <body>
        <noscript>
            <strong>
                We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
                properly without JavaScript enabled. Please enable it to
                continue.
            </strong>
        </noscript>
        <div id="app">
           <main-app></main-app>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/jquery.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/popper.min.js') }}"></script>
    </body>
</html>
