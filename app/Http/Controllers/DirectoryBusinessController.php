<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DirectoryBusiness;

class DirectoryBusinessController extends Controller
{
    public function index()
    {
        return DirectoryBusiness::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'business_name' => 'required|string|max:50',
            'business_desc' => 'required|string|max:100',
        ]);

        $business = DirectoryBusiness::create($validated);

        return response()->json($business, 201);
    }

    public function show($id)
    {
        $business = DirectoryBusiness::find($id);

        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        }

        return response()->json($business);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'business_name' => 'sometimes|required|string|max:50',
            'business_desc' => 'sometimes|required|string|max:100',
        ]);

        $business = DirectoryBusiness::find($id);

        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        }

        $business->update($validated);

        return response()->json($business);
    }

    public function destroy($id)
    {
        $business = DirectoryBusiness::find($id);

        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        }

        $business->delete();

        return response()->json(['message' => 'Business deleted successfully']);
    }
}

