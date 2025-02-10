<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 25);
            $table->string('last_name', 25);
            $table->string('nisn')->uniqid();
            $table->string('nis')->uniqid();
            $table->date('dob')->nullable();
            $table->enum('gender', ['MALE', 'FEMALE', 'NO SET'])->comment('MALE', 'FEMALE', 'NO SET')->default('NO SET');
            $table->longText('addres')->nullable();
            $table->string('type')->default('TEACHER');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('teacher_id')->nullable()->constrained('teachers')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
