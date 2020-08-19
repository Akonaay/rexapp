<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services;


class ServicesController extends Controller
{
    public function all()
    {
        $services = Services::all();

        return response()->json([
            "services" => $services
        ], 200);
    }

    public function get($id)
    {
        $service = Services::whereId($id)->first();

        return response()->json([
            "service" => $service
        ], 200);
    }

    public function new(Request $request)
    {
        // Handle Icon File Upload
        if ($request->hasFile('icon')) {
            $filenameWithExt = $request->file('icon')->getClientOriginalName();

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);

            $extension = $request->file('icon')->getClientOriginalExtension();

            $fileNameToStore = $filename . '.' . $extension;

            $path = $request->file('icon')->storeAs('public/service_icons', $fileNameToStore);
        } else {
            $fileNameToStore = 'noimage.jpg';
        }

        // Create Services
        $service = new Services;
        $service->icon = $fileNameToStore;
        $service->title = $request->input('title');
        $service->description = $request->input('description');
        $service->save();

        return response()->json([
            "service" => $service
        ], 200);
    }

    public function update(Request $request, $id)
    {
        // Handle File Upload
        if ($request->hasFile('icon')) {
            $filenameWithExt = $request->file('icon')->getClientOriginalName();

            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);

            $extension = $request->file('icon')->getClientOriginalExtension();

            $fileNameToStore = $filename . '.' . $extension;

            $path = $request->file('icon')->storeAs('public/service_icons', $fileNameToStore);
        }

        // Create Services
        $service = Services::find($id);
        if ($request->hasFile('icon')) {
            $service->icon = $fileNameToStore;
        }
        $service->title = $request->input('title');
        $service->description = $request->input('description');
        $service->save();

        return response()->json([
            "service" => $service,
        ], 200);
    }

    public function destroy($id)
    {
        Services::destroy($id);

        return response()->json([
            "service" => "Service Deleted."
        ], 200);
    }
}
