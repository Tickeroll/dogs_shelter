<?php

namespace App\Http\Controllers;

use App\Models\Animals;
use Illuminate\Http\Request;
use App\Http\Resources\Animal;
use Illuminate\Http\Response;

class AnimalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new Response())->setContent([
            'routes' => [
                'search' => route('animals.search'),
                'animal' => route('animals.show', '@id')
            ],
            'filterConfig' => [
                'type' => \App\Constants\Animals\Type::getDescription(),
                'size' => \App\Constants\Animals\Size::getDescription(),
                'gender' => \App\Constants\Gender::getDescription(),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Animals  $animals
     * @return \Illuminate\Http\Response
     */
    public function show(Animals $animals)
    {
        print_r($animals);
        return new Animal($animals);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Animals  $animals
     * @return \Illuminate\Http\Response
     */
    public function edit(Animals $animals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Animals  $animals
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Animals $animals)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Animals  $animals
     * @return \Illuminate\Http\Response
     */
    public function destroy(Animals $animals)
    {
        //
    }

    /**
     * поиск животных по параметрам
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $requestFilter = $request->get('filter', []);
        $allowedFields = [
            'type', 'gender', 'age', 'size'
        ];
        $select = Animals::query();

        if (is_array($requestFilter) && !empty($requestFilter)) {
            foreach ($requestFilter as $field => $value) {
                if (empty((int) $value) || !in_array($field, $allowedFields)) {
                    continue;
                }

                switch ($field) {
                    case 'type':
                    case 'gender':
                    case 'size':
                        $select->where($field,  (int) $value);
                        break;
                    case 'age':
                        break;
                }
            }
        }

        return Animal::collection(
            $select->paginate(12)
        );
    }
}
