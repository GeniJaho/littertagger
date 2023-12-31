<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use App\Models\Tag;
use Illuminate\Http\Request;

class PhotoTagsController extends Controller
{
    public function store(Photo $photo, Request $request)
    {
        $photo->tags()->syncWithoutDetaching($request->tag_id);

        return [];
    }

    public function destroy(Photo $photo, Tag $tag)
    {
        $photo->tags()->detach($tag);

        return [];
    }
}
