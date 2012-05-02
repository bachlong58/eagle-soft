<?php
class Model_Destination extends Model_Base
{
	/*
	 * Search Customer
	 */
	public function a_fSearch($the_a_Data)
	{
		$o_Table = new Model_Table_Destination();
		return $o_Table->a_fSearch($the_a_Data);
	}

	public function i_fInsert($the_a_Data)
	{
		$a_Data = array(
			'destination' => $the_a_Data['destination'],
			'id_cc_card' => $the_a_Data['cid'],
			'id_cc_did' => $the_a_Data['did'],
			'voip_call' => $the_a_Data['voip_call'],
			'validated' => $the_a_Data['validated'],
			'priority' => $the_a_Data['priority'],
			'secondusedreal' => $the_a_Data['secondusedreal'],
			'activated' => $the_a_Data['active'],
			'creationdate' => date('Y-m-d H:i:s')
		);
		$o_Table = new Model_Table_Destination();
		return $o_Table->i_fInsert($a_Data);
	}	

	public function i_fUpdate($the_a_Data, $the_i_Id)
	{
		$a_Data = array(
			'destination' => $the_a_Data['destination'],			
			'voip_call' => $the_a_Data['voip_call'],
			'validated' => $the_a_Data['validated'],
			'activated' => $the_a_Data['active']
		);
		$o_Table = new Model_Table_Destination();
		return $o_Table->i_fUpdate($a_Data, $the_i_Id);
	}
	
	public function i_fDelete($the_i_Id)
	{
		$o_Table = new Model_Table_Destination();
		return $o_Table->i_fDelete($the_i_Id);
	}
	
	public function o_fGetItem($the_i_Id)
	{
		$o_Table = new Model_Table_Destination();
		return $o_Table->o_fGetItem($the_i_Id);
	}
}