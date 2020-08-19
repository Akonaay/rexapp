<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        return response()->json([
            'news' => $news
        ], 200);
    }

    public function store(Request $request)
    {
        // Handle File Upload
        if ($request->hasFile('image')) {
            $filenameWithExt = $request->file('image')->getClientOriginalName();

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);

            $extension = $request->file('image')->getClientOriginalExtension();

            $fileNameToStore = $filename . '.' . $extension;

            $path = $request->file('image')->storeAs('public/news_images', $fileNameToStore);
        } else {
            $fileNameToStore = 'noimage.jpg';
        }

        // Create Services
        $news = new News;
        $news->image = $fileNameToStore;
        $news->title = $request->input('title');
        $news->description = $request->input('description');
        $news->save();

        return response()->json([
            "news" => $news
        ], 200);
    }

    public function show($id)
    {
        $news = News::whereId($id)->first();

        return response()->json([
            "news" => $news
        ], 200);
    }

    public function update(Request $request, $id)
    {
        // Handle File Upload
        if ($request->hasFile('image')) {
            $filenameWithExt = $request->file('image')->getClientOriginalName();

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);

            $extension = $request->file('image')->getClientOriginalExtension();

            $fileNameToStore = $filename . '.' . $extension;

            $path = $request->file('image')->storeAs('public/news_images', $fileNameToStore);
        }

        // Create Services
        $news = News::find($id);
        if ($request->hasFile('image')) {
            $news->image = $fileNameToStore;
        }
        $news->title = $request->input('title');
        $news->description = $request->input('description');
        $news->save();

        return response()->json([
            "news" => $news
        ], 200);
    }


    public function destroy($id)
    {
        News::destroy($id);

        return response()->json([
            "news" => "News Deleted."
        ], 200);
    }
}
