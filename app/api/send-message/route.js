/*import { db } from '../../../lib/db'; // шорткат на lib/db.js

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    await db.execute(
      'INSERT INTO messages (name, phone, email, message) VALUES (?, ?, ?, ?)',
      [name, phone, email, message]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('DB error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Database error' }), {
      status: 500,
    });
  }
}*/
import { db } from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log('POST request received'); // Дебаг
    const body = await request.json();
    console.log('Request body:', body); // Дебаг
    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      console.error('Missing required fields');
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const [result] = await db.execute(
      'INSERT INTO messages (name, phone, email, message) VALUES (?, ?, ?, ?)',
      [name, phone, email, message]
    );
    console.log('Insert result:', result); // Дебаг

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('POST error:', error.message, error.stack); // Детальне логування
    return NextResponse.json({ success: false, error: `Database error: ${error.message}` }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log('GET request received'); // Дебаг
    // Перевірка підключення до бази
    const [test] = await db.execute('SELECT 1');
    console.log('DB connection test:', test); // Дебаг

    const [rows] = await db.execute('SELECT * FROM messages ORDER BY id DESC');
    console.log('Fetched messages:', rows); // Дебаг

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('GET error:', error.message, error.stack); // Детальне логування
    return NextResponse.json({ success: false, error: `Database error: ${error.message}` }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    console.log('DELETE request received'); // Дебаг
    const { id } = await request.json();
    console.log('Deleting message ID:', id); // Дебаг
    const [result] = await db.execute('DELETE FROM messages WHERE id = ?', [id]);
    console.log('Delete result:', result); // Дебаг
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error.message, error.stack);
    return NextResponse.json({ success: false, error: `Database error: ${error.message}` }, { status: 500 });
  }
}