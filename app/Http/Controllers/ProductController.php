<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('crudProducts/Index', [
            'products' => product::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('crudProducts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        product::create([
            'title' => $request->title,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(product $product)
    {
        return Inertia::render('crudProducts/Show', [
            'products' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(product $product)
    {
        return Inertia::render('crudProducts/Edit', [
            'products' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, product $product)
    {
        $product->update([
            'title' => $request->title,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        $product->delete();
    }
}
