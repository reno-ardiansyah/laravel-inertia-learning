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
        Schema::create('absences', function (Blueprint $table) {
            $table->id();
            $table->datetime('date')->nullable();
            $table->enum('status', ['SAKIT', 'IZIN', 'ALPA', 'TIDAK HADIR'])->comment('SAKIT', 'IZIN', 'ALPA', 'TIDAK HADIR')->default('TIDAK HADIR');
            $table->string('reason')->nullable();
            $table->boolean('time')->default(0);
            $table->enum('type', ['STUDENT', "TEACHER"])->comment('STUDENT', "TEACHER")->default('STUDENT');
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absences');
    }
};
