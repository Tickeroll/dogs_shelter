<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name', 200)
                ->comment('имя животного')
                ->charset('utf8')
                ->collation('utf8_unicode_ci');
            $table->unsignedTinyInteger('type')->nullable()->comment('тип животного');
            $table->unsignedTinyInteger('gender')->nullable()->comment('пол');
            $table->date('birthday')->comment('день рождения');
            $table->string('color', 400)
                ->comment('цвет животного')
                ->charset('utf8')
                ->collation('utf8_unicode_ci');
            $table->unsignedTinyInteger('size')->nullable()->comment('размер');
            $table->timestamps();

            $table->index('type');
            $table->index('gender');
            $table->index('birthday');
            $table->index('size');

            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animals');
    }
}
